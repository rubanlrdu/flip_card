let count=0;


{
    function increase()
    {
        count++;
        document.getElementById("add_text").innerHTML=count;
    }
    function decrease()
    {
        
        if(count>0)
        {
        count--;
        if(count==0)
            {
                document.getElementById("add_text").innerHTML="<label>ADD</label>";
            }
        else{
        document.getElementById("add_text").innerHTML=count;
        }
    }
        
    }
}