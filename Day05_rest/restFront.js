async function getUser(){
    try{
        const res = await axios.get('/users'); //서버에 get으로 /users를 전달후 응답
        //sever.js의 20행
        const users = res.data;
        const list = document.getElementById('list');
        list.innerHTML=''; //inner: 넣을 자리

        Object.keys(users).map(function (key){
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            span.textContent= users[key];
            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async()=>{ // 수정버튼 클릭했을 때
                const name = prompt('바꿀 이름을 입력하세요');
                if(!name){
                    return alert('이름을 반드시 입력하셔야 합니다.');
                }
                try{
                    await axios.put('/user/'+key, {name}); //바뀔이름 넣기
                    getUser(); //재귀함수 : 수정성공하면 다시 내 함수를 불러옴 
                }catch(err){
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent='삭제';
            remove.addEventListener('click', async()=>{
                try{
                    await axios.delete('/user/'+key);
                    getUser();
                }
                catch(err){
                    console.error(err);
                }
            });
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
            console.log(res.data);
        });
    }
    catch(err){
        console.error(err);
    }
}

window.onload = getUser; //화면 로딩시 겟유저함수 호출 

//폼제출시 실행
document.getElementById('form').addEventListener('submit',async(e)=>{
    e.preventDefault();//모든 이벤트 취소 : 전송할거니까 이상한거 다 취소야
    const name=e.target.username.value;
    if(!name){
        return alert('이름을 입력하세요');
    }
    try{
        await axios.post('/user',{name}); //이름등록
        getUser(); //추가이후에 화면 새로고침 역할
    }catch(err){
        console.error(err);
    }
    e.target.username.value='';//작업 완료 후 벨류쪽 빈칸으로 만들기
});