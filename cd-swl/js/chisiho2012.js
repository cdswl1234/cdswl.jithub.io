// JavaScript Document




/////////////��Ʒ����
function  emp(oInput){  
           if(oInput.eflag!=true){  
                       oInput.value="";  
                       oInput.eflag=true;  
           }  
}

////////////�����ı���
function yw()
{
if(document.form1.cxz.value=="")
{
alert("������һ����Ʒ���� | Enter a product name");
document.form1.cxz.focus();
return false;
}
}