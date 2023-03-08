function recognise()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V0P2U3Ww7/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.round()*255)+1;
        random_number_g=Math.floor(Math.round()*255)+1;
        random_number_b=Math.floor(Math.round()*255)+1;
        
        bark="";
        meow="";
        moo="";
        neigh="";
        roar="";
        document.getElementById("result_label").innerHTML='I Can Hear - '+results[0].label;
        document.getElementById("dog").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("cat").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("horse").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("cow").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("tiger").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById('img');

        if(results[0].label=="Bark")
        {
            img.src='images.jpeg';
            document.getElementById("dog").innerHTML='Bark '+(results[1].confidence*100).toFixed(0);
            document.getElementById("cat").innerHTML='Meow '+(results[2].confidence*100).toFixed(0);
            document.getElementById("horse").innerHTML='Neigh '+(results[3].confidence*100).toFixed(0);
            document.getElementById("cow").innerHTML='Moo '+(results[4].confidence*100).toFixed(0);
            document.getElementById("tiger").innerHTML='Roar '+(results[05].confidence*100).toFixed(0);
        }

        else if(results[0].label=="Meow")
        {
            img.src='images (1).jpg';
            document.getElementById("dog").innerHTML='Bark '+(results[1].confidence*100).toFixed(0);
            document.getElementById("cat").innerHTML='Meow '+(results[2].confidence*100).toFixed(0);
            document.getElementById("horse").innerHTML='Neigh '+(results[3].confidence*100).toFixed(0);
            document.getElementById("cow").innerHTML='Moo '+(results[4].confidence*100).toFixed(0);
            document.getElementById("tiger").innerHTML='Roar '+(results[5].confidence*100).toFixed(0);
        }

        else if(results[0].label=="Neigh")
        {
            img.src='images 1.jpeg';
            document.getElementById("dog").innerHTML='Bark '+(results[1].confidence*100).toFixed(0);
            document.getElementById("cat").innerHTML='Meow '+(results[2].confidence*100).toFixed(0);
            document.getElementById("horse").innerHTML='Neigh '+(results[3].confidence*100).toFixed(0);
            document.getElementById("cow").innerHTML='Moo '+(results[4].confidence*100).toFixed(0);
            document.getElementById("tiger").innerHTML='Roar '+(results[5].confidence*100).toFixed(0);
        }

        else if(results[0].label=="Moo")
        {
            img.src='cows-200x200.png';
            document.getElementById("dog").innerHTML='Bark '+(results[1].confidence*100).toFixed(0);
            document.getElementById("cat").innerHTML='Meow '+(results[2].confidence*100).toFixed(0);
            document.getElementById("horse").innerHTML='Neigh '+(results[3].confidence*100).toFixed(0);
            document.getElementById("cow").innerHTML='Moo '+(results[4].confidence*100).toFixed(0);
            document.getElementById("tiger").innerHTML='Roar '+(results[5].confidence*100).toFixed(0);
        }

        else if(results[0].label=="Roar")
        {
            img.src='tiger-3264048_1920-200x200.jpg';
            document.getElementById("dog").innerHTML='Bark '+(results[1].confidence*100).toFixed(0);
            document.getElementById("cat").innerHTML='Meow '+(results[2].confidence*100).toFixed(0);
            document.getElementById("horse").innerHTML='Neigh '+(results[3].confidence*100).toFixed(0);
            document.getElementById("cow").innerHTML='Moo '+(results[4].confidence*100).toFixed(0);
            document.getElementById("tiger").innerHTML='Roar '+(results[5].confidence*100).toFixed(0);
        }

        else
        {
            img.src='images.png';
            document.getElementById("dog").innerHTML='Bark '+(results[1].confidence*100).toFixed(0);
            document.getElementById("cat").innerHTML='Meow '+(results[02].confidence*100).toFixed(0);
            document.getElementById("horse").innerHTML='Neigh '+(results[0].confidence*100).toFixed(0);
            document.getElementById("cow").innerHTML='Moo '+(results[0].confidence*100).toFixed(0);
            document.getElementById("tiger").innerHTML='Roar '+(results[0].confidence*100).toFixed(0);
        }
    }
}