$(document).ready(function(){
    $('#getUser').on('click',function(){
        var user_id = $('#user_id').val();
        $.ajax({
            type:'POST',
            url:'getData.php',
            dataType: "json",
            data:{user_id:user_id},
            success:function(data){
                if(data.status == 'ok'){
                    $('#userName').text(data.result.name);
                    $('#userEmail').text(data.result.email);
                    $('#userPhone').text(data.result.phone);
                    $('#userCreated').text(data.result.created);
                    $('.user-content').slideDown();
                }else{
                    $('.user-content').slideUp();
                    alert("User not found...");
                } 
            }
        });
    });
});


//1     K��inn virkjast �egar skjali� er tilb�i�
//2     Fall sem fer � gang �egar smellt er � ID getUser � html skjalinu
//3     B�um til breytuna user_id og setjum inn� hana �a� sem er � ID user_id 
//4     byrjum Ajax bei�ni
//5     Hva�a t�pa af bei�ni erum vi� a� bi�ja um
//6     � hva�a url � a� senda bei�nina
//7     Hva�a data t�pu � serverin von �
//8     Hva�a g�gn ver�a send � serverinn
//9     �egar bei�nin hefur tekist a� �� keyrist �etta fall og g�gnin sem komu fr� servernum eru � data
//10    Ef gildi� � data.status er ok �� keyrist �essi if setning
//11-14 Setjum textann sem vi� fengum � php skjalinu � vi�komandi ID element
//15    SlideDown � class user-content
//16    else
//17    slideUP � class user-content
//18    pop up sem segir "user not found.."