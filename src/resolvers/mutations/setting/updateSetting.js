const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const SettingToUpdate = await models.Setting.findOne({_id: id});

    if(!SettingToUpdate) throw new ApolloError(`Could not find Setting with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      SettingToUpdate[value] = input[value];
    });

    const updatedSetting = await SettingToUpdate.save();

    return updatedSetting
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  