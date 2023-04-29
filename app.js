

var input = document.getElementById('input');
// console.log(input);
var submit = document.getElementById('submit');
// console.log(submit);
var loremarea = document.getElementById('loremarea');

submit.addEventListener('click', ()=>{
    var text = ["Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.                                        ","Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.","Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.","Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.","Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds."]


    var value = parseInt(input.value) - 1;
    var textSlected = text[value];

    if (input.value == ""|| NaN || input.value > 5 || input.value <= 0){
        loremarea.innerHTML = `<div class="card">Please write number between 1 to 5</div>`
    }
    
    else if(input.value == 1){
        loremarea.innerHTML = `<div class="card">${text[0]}</div>`
    }
    else if(input.value == 2){
        loremarea.innerHTML = `<div class="card">${text[0]}</div><div class="card">${text[1]}</div>`
    }
    else if(input.value == 3){
        loremarea.innerHTML = `<div class="card">${text[0]}</div><div class="card">${text[1]}</div><div class="card">${text[2]}</div>`
    }
    else if(input.value == 4){
        loremarea.innerHTML = `<div class="card">${text[0]}</div><div class="card">${text[1]}</div><div class="card">${text[2]}</div><div class="card">${text[3]}</div>`
    }
    else if(input.value == 5){
        loremarea.innerHTML = `<div class="card">${text[0]}</div><div class="card">${text[1]}</div><div class="card">${text[2]}</div><div class="card">${text[3]}</div><div class="card">${text[4]}</div>`
    }
})
