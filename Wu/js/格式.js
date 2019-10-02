/*function MM_validateForm() { //v4.0
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { 
	  nm=val.name; 
	  if ((val=val.value)!="") {
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) errors+='- '+nm+' 请输入正确的邮箱格式！\n';
        } else if (test!='R') { num = parseFloat(val);
          if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
          if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
      } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' 请输入内容！\n'; }
    } if (errors) document.getElementById("name").innerHTML=('出错:\n'+errors);
    document.MM_returnValue = (errors == '');
} }// JavaScript Document
*/

function check1(){
	var pattern_name=/^[a-z]\w{5,13}$/;
	var name=document.getElementById("name").value;
	if(!pattern_name.test(name)){
		document.getElementById("msg_name").innerHTML="*以小写字母开头，包括字母、数字或下划线!";
		return false;
	}
	
	else{
		document.getElementById("msg_name").innerHTML="用户名校验通过";
		return true;
	}
	return true;
	}

function check2(){
	var pattern_useremail=/^\w+((-\w+)|(\.\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]/;
	var useremail=document.getElementById("useremail").value;
	if(!pattern_useremail.test(useremail)){
		document.getElementById("msg_useremail").innerHTML="*请输入正确的邮箱地址!";
		return false;
	}
	else{
		document.getElementById("msg_useremail").innerHTML="邮箱校验通过";
		return true;
	}
	return true;
}

function check3(){
	var pattern_pwd=/^[a-zA-Z\d ]{6,10}$/;
	var pwd=document.getElementById("password").value;
	if(!pattern_pwd.test(pwd)){
		document.getElementById("msg_pwd").innerHTML="*只能包括字母、数字或下划线，长度6~10位!";
		return false;
	}
	
	else{
		document.getElementById("msg_pwd").innerHTML="密码校验通过";
		return true;
	}
	return true;
}

function check4(){
	var pwd=document.getElementById("password").value;
	var password=document.getElementById("copypassword").value;
	if((password!=null) && (password!=pwd)){
		document.getElementById("msg_password").innerHTML="*请与第一次输入密码一致！";
		return false;
	}
	
	else{
		document.getElementById("msg_password").innerHTML="密码已确认";
		return true;
	}
	return true;
}

function check5(){
	var pattern_yod=/^[1-9]\d{1,2}$/;
	var yearold=document.getElementById("yearold").value;
	if(!pattern_yod.test(yearold) || yearold > 100){
		document.getElementById("msg_yod").innerHTML="*请输入正确的年龄！";
		return true;
	}
	
	else{
		document.getElementById("msg_yod").innerHTML="年龄校验通过";
		return false;
	}
	return true;
}