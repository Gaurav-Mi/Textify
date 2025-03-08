const url = "https://rimedia-paraphraser.p.rapidapi.com/api_paraphrase.php";
const options = {
  method: "POST",
  headers: {
    "x-rapidapi-key": "1a76a4467amsh4a90b3d0e66d424p178d3fjsn1606d236f962",
    "x-rapidapi-host": "rimedia-paraphraser.p.rapidapi.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    text: "hello how u are ",
    lang: "en",
    paraphrase_capital: "true",
    protected: "YOUR;something",
  }),
};

async function data() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

data();