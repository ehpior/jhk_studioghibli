var j=0,main=0;
i = new Array();
for(j=0 ; j<20 ; j++){
	i[j]=0;
}
setInterval(function(){
	var a = new Date();
	$("#now").text("현재시각 : "+(a.getMonth()+1)+" 월 "+a.getDate()+" 일 "+a.getHours()+" 시 "+a.getMinutes()+" 분 "+a.getSeconds()+" 초");
},1000);
$("#main_right").click(function(){
	if(main==0){
		$('#main').attr("src","main_background2.jpg");
		main=1;
	}
	else if(main==1){
		$('#main').attr("src","main_background3.png");
		main=2;
	}
	else if(main==2){
		$('#main').attr("src","main_background1.png");
		main=0;
	}
});
$("#main_left").click(function(){
	if(main==0){
		$('#main').attr("src","main_background3.png");
		main=2;
	}
	else if(main==1){
		$('#main').attr("src","main_background1.png");
		main=0;
	}
	else if(main==2){
		$('#main').attr("src","main_background2.jpg");
		main=1;
	}
});
$("#words2").hide();
$("#words3").hide();
$("#words4").hide();
$("#words1").hide();
var time=0;
setInterval(function(){
	$("#words"+time).fadeToggle(1);
	time+=1;
	if(time==5) time=0;
	$("#words"+time).fadeToggle();},3300);


$("#img0").click(function(){
	if(i[0]==0){ 
		$(this).attr("src","image/아리에티2.jpg");
		i[0]=1;
  	}
	else if(i[0]==1){
		$(this).attr("src","image/아리에티1.jpg");
		i[0]=0;
	}
});
$("#img1").click(function(){
	if(i[1]==0){ 
		$(this).attr("src","image/유바바2.jpg");
		i[1]=1;
  	}
	else if(i[1]==1){
		$(this).attr("src","image/유바바1.jpg");
		i[1]=0;
	}
});
$("#img2").click(function(){
	if(i[2]==0){ 
		$(this).attr("src","image/소스케2.jpg");
		i[2]=1;
  	}
	else if(i[2]==1){
		$(this).attr("src","image/소스케1.jpg");
		i[2]=0;
	}
});
$("#img3").click(function(){
	if(i[3]==0){ 
		$(this).attr("src","image/메이2.jpg");
		i[3]=1;
  	}
	else if(i[3]==1){
		$(this).attr("src","image/메이1.jpg");
		i[3]=0;
	}
});
$("#img4").click(function(){
	if(i[4]==0){ 
		$(this).attr("src","image/가오나시2.jpg");
		i[4]=1;
  	}
	else if(i[4]==1){
		$(this).attr("src","image/가오나시1.jpg");
		i[4]=0;
	}
});
$("#img5").click(function(){
	if(i[5]==0){ 
		$(this).attr("src","image/소피2.jpg");
		i[5]=1;
  	}
	else if(i[5]==1){
		$(this).attr("src","image/소피1.jpg");
		i[5]=0;
	}
});
$("#img6").click(function(){
	if(i[6]==0){ 
		$(this).attr("src","image/하울2.jpg");
		i[6]=1;
  	}
	else if(i[6]==1){
		$(this).attr("src","image/하울1.jpg");
		i[6]=0;
	}
});
$("#img7").click(function(){
	if(i[7]==0){ 
		$(this).attr("src","image/포뇨2.jpg");
		i[7]=1;
  	}
	else if(i[7]==1){
		$(this).attr("src","image/포뇨1.jpg");
		i[7]=0;
	}
});
$("#img8").click(function(){
	if(i[8]==0){ 
		$(this).attr("src","image/센2.jpg");
		i[8]=1;
  	}
	else if(i[8]==1){
		$(this).attr("src","image/센1.jpg");
		i[8]=0;
	}
});
$("#img9").click(function(){
	if(i[9]==0){ 
		$(this).attr("src","image/하쿠2.jpg");
		i[9]=1;
  	}
	else if(i[9]==1){
		$(this).attr("src","image/하쿠1.jpg");
		i[9]=0;
	}
});
$("#img10").click(function(){
	if(i[10]==0){ 
		$(this).attr("src","image/키키2.jpg");
		i[10]=1;
  	}
	else if(i[10]==1){
		$(this).attr("src","image/키키1.jpg");
		i[10]=0;
	}
});
$("#img11").click(function(){
	if(i[11]==0){ 
		$(this).attr("src","image/토토로2.jpg");
		i[11]=1;
  	}
	else if(i[11]==1){
		$(this).attr("src","image/토토로1.jpg");
		i[11]=0;
	}
});
