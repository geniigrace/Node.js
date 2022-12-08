function findAndSaveUser(Users){
    Users.findOne({}, (err,user)=> {
        if(err){//promise 역할, 에러 발생시 에러리턴
            return console.error(err);
        }
        user.name='zero';
        user.save((err)=>{
            if(err){//promise 역할, 에러 발생시 에러리턴
                return console.error(err);
            }
            Users.findOne({ gender : 'm'}, (err,user)=>{

            });
        });
    });

}