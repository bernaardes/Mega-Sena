function megasena()
{
    //var correto = parseInt(3,8,15)//
    var x1 = document.getElementById("cx1").value;
    var x2 = document.getElementById("cx2").value;
    var x3 = document.getElementById("cx3").value;

    var mega = [
        ["1","2","3","4","5"],
        ["6","7","8","9","10"],
        ["11","12","13","14","15"],
        ["16","17","18","19","20"]
    ]

    if(x1 == mega[0][2] && x2 == mega[1][2] && x3 == mega[2][4])
    {
        alert("PARABÉNS VC É O NOVO MILIONÁRIO DO ANO!!!");
    }
        else if(x1 == mega[0][2] && x2 == mega[2][4] && x3 == mega[1][2])
        {
            alert("PARABÉNS VC É O NOVO MILIONÁRIO DO ANO!!!");
        }
            else if(x1 == mega[2][4] && x2 == mega[0][2] && x3 == mega[1][2])
            {
                alert("PARABÉNS VC É O NOVO MILIONÁRIO DO ANO!!!");
            }
                else if(x1 == mega[1][2] && x2 == mega[0][2] && x3 == mega[2][4])
                {
                    alert("PARABÉNS VC É O NOVO MILIONÁRIO DO ANO!!!");
                }
                    else if(x1 == mega[2][4] && x2 == mega[1][2] && x3 == mega[0][2])
                    {
                        alert("PARABÉNS VC É O NOVO MILIONÁRIO DO ANO!!!");
                    }
                        else if(x1 == mega[1][2] && x2 == mega[2][4] && x3 == mega[0][2])
                        {
                            alert("PARABÉNS VC É O NOVO MILIONÁRIO DO ANO!!!");
                        }
    else
    {
        alert("INFELIZMENTE NÃO FOI DESSA VEZ, MAS CONTINUE TENTANDO!");
    }
}