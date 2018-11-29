
function gen_ran(){
    ran_img = [] ;
     
    i = 0;
    while(i<100){
        rand = Math.round(Math.random()*1000);
        
        ran_img.push("https://picsum.photos/800/600/?image="+rand);
        i+=1;
    }  


    console.log(ran_img);
}
