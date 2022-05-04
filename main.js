//arrayOfQuotes
const arrayOfQuotes=[
    {'author':'Liz.A',
        'quote':'Always remaind yourself what you want'
    },
    {'author':'Eizabeth.A',
        'quote':' Always Keep the end in mind'
    },
    {'author':'Beth.A',
        'quote':'Find things that give you joy'
    },
    {'author':'Hillz B',
        'quote':'Always have someone to talk to if you are in disperate situations'
    },
    {'author':'Rax T',
        'quote':'Its not what happens in life that matters,but how you respond to it'
    },
    { 'author':'Agie.A',
        'quote':'The beautiful thing about learning is that no one can take it away from you.'  
    },
    { 'author':'Heskey',
        'quote':'Learn from yesterday,live for today, hope for tommorrow,The important thing is not to stop questioning'  
    },
    {'author':'Innocent.N',
        'quote':'All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.'  
    },
    { 'author':'Julius.N',
         'quote':'It is because of hope that you suffer. It is through hope that you’ll change things.'   
    },
    { 'author':'Daniel.C',
         'quote':'May your choices reflect your hopes, not your fears.'    
    },
    { 'author':'Dathan.A',
         'quote':'The best revenge is massive success.'    
    },
];
//add random
function generateQuote(){
    const random= Number.parseInt(Math.random()*arrayOfQuotes.length +1);
    document.querySelector('#quoteOutput').textContent= `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent= `--${arrayOfQuotes[random].author}--`;

}