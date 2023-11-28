var quotes = [
    {quote:"밥먹으면 배부르다", author:"아무개"},
    {quote:"가만히만 있어도 반은 가더라", author:"아무개"},
    {quote:"사랑은 가까이에 있다", author:"정예원"},
    {quote:"티끌모아 티끌.", author:"김란주"},
    {quote:"지금 과제할 시간도 없는데 어떻게 놀아!!!", author:"영경배"},
    {quote:"졸리면 자야한다", author:"아무개"},
    {quote:"웃으면 복이오진 않지만 기분이 좋아진다", author:"아무개"},
    {quote:"하기 싫으면 안한다", author:"정예원"},
];

const quoteContent = document.querySelector("#quoteForm span:first-child");
const author = quoteForm.querySelector("#quoteForm span:last-child")

const todayQuote = quotes[Math.floor(Math.random()*8)];

quoteContent.innerText=todayQuote.quote;
author.innerText=todayQuote.author;