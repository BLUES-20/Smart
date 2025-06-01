    const studentResults = {
      // HAMMADRESULLT
      "BAYTUL001": {
        photo: "ibikunle.jpg",
        info: {
          "USER NAME Number": "BAYTUL001",
          "Candidate's Name": "IBIKUNLE AHMAD ADEDEMOLA",
          "Examination": "SESSION 2 2024",
          
        },
        subjects: {
          "GEOGRAPHY": "C6",
          "CIVIC EDUCATION": "C6",
          "ENGLISH LANGUAGE": "C6",
          "GENERAL MATHEMATICS": "B3",
          "BIOLOGY": "D7",
          "CHEMISTRY": "C6",
          "PHYSICS": "C6",
          "ANIMAL HUSBANDRY": "C5",
          "COMPUTER STUDIES": "C4"
        },
        total:{
          "TOTAL RESULT": "80%"
        }

       
      }
    };

    function checkResult() {
      const pin = document.getElementById("examPin").value.trim().toUpperCase();
      const result = studentResults[pin];
      const error = document.getElementById("error");

      if (result) {
        error.textContent = "";
        document.getElementById("form-section").style.display = "none";
        document.getElementById("result-section").style.display = "block";

        document.getElementById("studentPhoto").src = result.photo;

        fillTable("infoTable", result.info);
        fillTable("subjectTable", result.subjects);
        fillTable("totalTable", result.total);
      } else {
        error.textContent = "Invalid Exam Pin. Please try again.";
      }
    }

    function fillTable(tableId, data) {
      const table = document.getElementById(tableId);
      table.innerHTML = "";
      for (let key in data) {
        const row = `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
        table.innerHTML += row;
      }
    }