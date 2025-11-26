async function getQuote() {
      const url = "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom";

      try {
        const response = await fetch(url, {
          headers: { "X-Api-Key": "dFonxSnGrKHIYJ8ObIEbKcipC8v7FAKMAk1764rV" }
        });

        if (!response.ok) {
          throw new Error("Ошибка API");
        }

        const data = await response.json();
        const item = data[0];

        document.getElementById("quote").textContent = `"${item.quote}"`;
        document.getElementById("author").textContent = `— ${item.author}`;

      } catch (error) {
        document.getElementById("quote").textContent = "Ошибка загрузки 😥";
        document.getElementById("author").textContent = "";
      }
    }
   document.body.addEventListener("click", getQuote);

    getQuote();


