import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
    {
        name: 'Jan Kochanowski',
        books: ['Fraszki', 'Odprawa posłów greckich', 'Treny', 'Ortographia polska'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Jan_Kochanowski.png/507px-Jan_Kochanowski.png'
    },
    {
        name: 'Adam Mickiewicz',
        books: ['Pan Tadeusz', 'Dziady', 'Oda do młodości','Romantyczność','Sonety krymskie', 'Reduta Ordona' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Adam_Mickiewicz_by_Jan_Mieczkowski.jpg/374px-Adam_Mickiewicz_by_Jan_Mieczkowski.jpg'
    },
    {
        name: 'Zygmunt Krasiński',
        books: ['Nie-Boska komedia', 'Irydion' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Scheffer_Zygmunt_Krasi%C5%84ski.jpg/482px-Scheffer_Zygmunt_Krasi%C5%84ski.jpg'
    },
    {
        name: 'Bolesław Prus',
        books: ['Lalka', 'Kamizelka', 'Faraon', 'Placówka', 'Kamizelka', 'Emancypantki', 'Katarynka' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Boles%C5%82aw_Prus_studio_portrait.jpg/800px-Boles%C5%82aw_Prus_studio_portrait.jpg'
    },
    {
        name: 'Eliza Orzeszkowa',
        books: ['Nad Niemnem', 'Gloria victis', 'Rota', 'O krasnoludkach i o sierotce Marysi' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Eliza_Orzeszkowa.PNG'
    },
    {
        name: 'Maria Konopnicka',
        books: ['Mendel Gdańsk', 'Pan Balcer w Brazylii' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Maria_Konopnicka_Portrait.jpg'
    },
    {
        name: 'Stanisław Wyspiański',
        books: ['Wesele' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Stanis%C5%82aw_Wyspia%C5%84ski_%28-1905%29.jpg/407px-Stanis%C5%82aw_Wyspia%C5%84ski_%28-1905%29.jpg'
    },
    {
        name: 'Władysław Stanisław Reymont',
        books: ['Chłopi', 'Ziemia obiecana' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/W%C5%82adys%C5%82aw_Reymont.jpg'
    },
    {
        name: 'Stefan Żeromski',
        books: ['Ludzie bezdomni', 'Przedwiośnie', 'Popioły', 'Syzyfowe prace' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Portret_Stefana_%C5%BBeromskiego.jpg/428px-Portret_Stefana_%C5%BBeromskiego.jpg'
    },
    {
        name: 'Witold Gombrowicz',
        books: ['Ferdydurke', 'Bakakaj', 'Trans-Atlantyk', 'Pornografia', 'Ślub', 'Operetka', 'Kosmos' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Witold_Gombrowicz_by_Bohdan_Paczowski_-_detail.jpg'
    },
    {
        name: 'Zofia Nałkowska',
        books: ['Granica', 'Medaliony' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Zofia_Nalkowska.jpg/399px-Zofia_Nalkowska.jpg'
    },
    {
        name: 'Sławomir Mrożek',
        books: ['Tango','Męczeństwo Piotra Oheya','Indyk', 'Emigranci', 'Miłość na Krymie'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Slawomir_Mrozek.JPG'
    },
    {
        name: 'Hanna Krall',
        books: ['Zdążyć przed Panem Bogiem', 'Co się stało z naszą bajką', 'Na wschód od Arbatu' ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/2007.05.19._Hanna_Krall_by_Kubik_01.jpg'
    },
]

function getTurnData(authors){
    const allBooks = authors.reduce(function(p,c,i){
        return p.concat(c.books)
    }, []);

    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return{
        author: authors.find(author => author.books.some(title => title == answer)),
        books: fourRandomBooks
    };
};

const state = {
    turnData: getTurnData(authors)
    // turnData: {
    //     author: authors[0],
    //     books: authors[0].books
    // }
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
