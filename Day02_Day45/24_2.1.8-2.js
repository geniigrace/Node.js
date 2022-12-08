//promise 를 async와 await 로 대체 => try~catch 구문 적용

async function findAndSaveUser(Users){
    try{
    let user = await Users.findOne({});
    user.name='zero';
    user=await user.save();
    user = await Users.findOne({gender : 'm'});
    }
    catch(error){
        console.log(error);
    }
}