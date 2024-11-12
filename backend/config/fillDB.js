const {getFromApi, getImage} = require('../middlewares/getFromApi');

const fillDb = async (token, Schema, route) => {
    try {
      const response = await getFromApi(token, route);
      console.log("Filling DB");
  
      const updatesPromises = response.map(async (user) => {
        const userInfo = await getFromApi(token, `${route}/${user.id}`);
        
        if (Schema.modelName === 'Employees') {
          const profile = await getImage(token, `https://soul-connection.fr/api/employees/${user.id}/image`);
          userInfo.img = {data : profile, contentType : 'image/png'};
        }
  
        if (Schema.modelName === 'Customers') {
          const payments = await getFromApi(token, `${route}/${user.id}/payments_history`);
          userInfo.payments_history = payments;
  
          const convertToBuffer = (arrayBuffer) => {
            return Buffer.from(new Uint8Array(arrayBuffer));
          };
  
          const profile = await getImage(token, `https://soul-connection.fr/api/customers/${user.id}/image`);
          userInfo.img = {data : convertToBuffer(profile), contentType : 'image/png'};
  
          const encounters = await getFromApi(token, `https://soul-connection.fr/api/encounters/customer/${user.id}`);
          const encountersList = []
          for (const encounter of encounters) {
            const details = await getFromApi(token, `https://soul-connection.fr/api/encounters/${encounter.id}`);
            encountersList.push(details);
          }
          userInfo.encounters = encountersList;
        }
        await Schema.findOneAndUpdate({ id: userInfo.id }, 
          {$set: userInfo},
          { new: true, upsert: true });
      });
      await Promise.all(updatesPromises);
      console.log('Updated DB');
    } catch (error) {
      throw new Error(error.message);
    }
  }