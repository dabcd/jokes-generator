const apiUrl = "https://api.chucknorris.io/jokes/random";

const fetchJoke = async (name = "") => {
  try {
    const data = await fetch(apiUrl);
    const res = await data.json();
    let jokeText = res.value;
    if (name.length > 0) {
      jokeText = jokeText.replaceAll("Chuck Norris", name);
    }
    return jokeText;
  } catch (error) {
    alert(error);
  }
};

export default fetchJoke;
