const quotes = [
    {
        quote: "아무것도 바라지 않고 행해지는 그의 배려는 나에게 꽤 큰 신선함이었다",
    },
    {
        quote: "bibbidi-bobbidi-boo",
    },
    {
        quote: "Hakuna matata",
    },
    {
        quote: "오늘 피었다 지는 이름 없는 꽃과 같네",
    },
    {
        quote: "넌 내 모든 거야 내 여름이고 내 꿈이야",
    },
    {
        quote: "능숙해서 멋진 순간도 미숙해서 부끄러운 순간도 응원할 거야",
    },
    {
        quote: "Remember, you're the one who can fill the world with sunshine.",
    }
    ];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;