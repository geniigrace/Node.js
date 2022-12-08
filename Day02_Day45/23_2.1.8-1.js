//promise 를 async와 await 로 대체

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name='zero';
    user=await user.save();
    user = await Users.findOne({gender : 'm'});
}