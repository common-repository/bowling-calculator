/**
 * Form variable to perform operations on calc form.
 */
var form = "";

var frame_no = 1;
var throw_no = 1;

var results = [];

/**
 * Function to return result for the operation performed on calc.
 */
function calc(op) {
  if (op == 10){
    op = "X"
  } else if (op == -1){
    op = "/"
  }

  form = document.getElementById("bowling-calculator");

  if (throw_no == 1) {
    results[frame_no] = [];
  } else if (throw_no == 2) {
    for (var j = 0; j < 10; j++) {
      form[`e-${j}`].disabled = false;

      document.getElementById("e-" + j).classList.remove("hidetd");
    }
    form["e-/"].disabled = false;

    document.getElementById("e-d").classList.remove("hidetd");
  }

  if (
    op == "1" ||
    op == "2" ||
    op == "3" ||
    op == "4" ||
    op == "5" ||
    op == "6" ||
    op == "7" ||
    op == "8" ||
    op == "9" ||
    op == "0"
  ) {
    results[frame_no][throw_no] = parseInt(op);

    if (throw_no == 1) {
      document.getElementById("input" + frame_no + "-1").innerText = op;
      throw_no++;
      form["e-X"].disabled = true;

      document.getElementById("e-X").classList.add("hidetd");

      form["e-/"].disabled = false;

      document.getElementById("e-d").classList.remove("hidetd");
      for (var k = parseInt(10 - op); k < 10; k++) {
        form[`e-${k}`].disabled = true;

        document.getElementById("e-" + k).classList.add("hidetd");
      }
    } else if (throw_no == 2) {
      results[frame_no]["status"] = "no";

      document.getElementById("input" + frame_no + "-2").innerText = op;

      if (frame_no != 10) {
        calculate_frame_result(
          parseInt(
            results[frame_no][throw_no] + results[frame_no][throw_no - 1]
          )
        );
        throw_no--;
        frame_no++;
        form["e-/"].disabled = true;

        document.getElementById("e-d").classList.add("hidetd");
        form["e-X"].disabled = false;

        document.getElementById("e-X").classList.remove("hidetd");
      } else {
        if (results[frame_no]["1"] != 10) {
          calculate_frame_result(
            parseInt(
              parseInt(results[frame_no][throw_no]) +
                parseInt(results[frame_no][throw_no - 1])
            )
          );
          end_game();
        } else {
          throw_no++;
        }
      }
    } else {
      document.getElementById("input" + frame_no + "-3").innerText = op;

      calculate_frame_result(
        parseInt(
          parseInt(results[frame_no][throw_no]) +
            parseInt(results[frame_no][throw_no - 1]) +
            parseInt(results[frame_no][throw_no - 2])
        )
      );
      if (frame_no == 10) {
        end_game();
      } else {
        throw_no = 1;
        frame_no++;
        for (var k = 1; k < 10; k++) {
          form[`e-${k}`].disabled = false;

          document.getElementById("e-" + k).classList.remove("hidetd");
          form["e-X"].disabled = false;

          document.getElementById("e-X").classList.remove("hidetd");
          form["e-/"].disabled = true;

          document.getElementById("e-d").classList.add("hidetd");
        }
      }
    }
    return;
  }

  if (op == "X") {
    if (frame_no == 10) {
      results[frame_no][throw_no] = "10";

      switch (throw_no) {
        case 1:
          document.getElementById("input" + frame_no + "-1").innerText = "X";
          break;
        case 2:
          document.getElementById("input" + frame_no + "-2").innerText = "X";
          form["e-/"].disabled = true;

          document.getElementById("e-d").classList.add("hidetd");
          break;
        case 3:
          document.getElementById("input" + frame_no + "-3").innerText = "X";
          calculate_frame_result(
            parseInt(
              parseInt(results[frame_no]["1"]) +
                parseInt(results[frame_no]["2"]) +
                parseInt(results[frame_no]["3"])
            )
          );
          end_game();
          break;
      }
      throw_no++;
    } else {
      results[frame_no]["status"] = "X";
      results[frame_no][throw_no] = "10";
      results[frame_no][throw_no + 1] = "";
      calculate_frame_result(parseInt(10));

      document.getElementById("input" + frame_no + "-1").innerText = "";

      document.getElementById("input" + frame_no + "-2").innerText = "X";

      frame_no++;
      form["e-/"].disabled = true;

      document.getElementById("e-d").classList.add("hidetd");
    }

    return;
  }

  if (op == "/") {
    if (frame_no == 10) {
      results[frame_no][throw_no] = parseInt(
        10 - parseInt(results[frame_no][throw_no - 1])
      );

      switch (throw_no) {
        case 2:
          document.getElementById("input" + frame_no + "-2").innerText = "/";
          form["e-X"].disabled = false;
          document.getElementById("e-X").classList.remove("hidetd");
          form["e-/"].disabled = true;
          document.getElementById("e-d").classList.add("hidetd");
          throw_no++;
          break;
        case 3:
          document.getElementById("input" + frame_no + "-3").innerText = "/";
          calculate_frame_result(
            parseInt(
              parseInt(results[frame_no]["1"]) +
                parseInt(results[frame_no]["2"]) +
                parseInt(results[frame_no]["3"])
            )
          );
          end_game();
          break;
      }
    } else {
      results[frame_no]["status"] = "/";
      results[frame_no][throw_no] = parseInt(
        10 - results[frame_no][throw_no - 1]
      );
      calculate_frame_result(parseInt(10));

      document.getElementById("input" + frame_no + "-2").innerText = "/";

      frame_no++;
      throw_no--;
      form["e-X"].disabled = false;

      document.getElementById("e-X").classList.remove("hidetd");
      form["e-/"].disabled = true;

      document.getElementById("e-d").classList.add("hidetd");
    }

    return;
  }

  if (op == "new") {
    for (var i = 1; i <= 10; i++) {
      document.getElementById("input" + i + "-1").innerText = "";
      document.getElementById("input" + i + "-2").innerText = "";
      document.getElementById("input" + i + "-res").innerText = "";
      results.length = 0;
    }
    document.getElementById("input10-3").innerText = "";
    form["bowl_result"].innerText = "";
    frame_no = 1;
    throw_no = 1;
    for (var j = 0; j < 10; j++) {
      form[`e-${j}`].disabled = false;

      document.getElementById("e-" + j).classList.remove("hidetd");
    }
    form["e-X"].disabled = false;

    document.getElementById("e-X").classList.remove("hidetd");
    form["e-/"].disabled = true;

    document.getElementById("e-d").classList.add("hidetd");
  }
}

function calculate_frame_result(frame_res) {
  let scoreBodyElements = document.getElementsByClassName("activeBG");

  for (element of scoreBodyElements) {
    element.classList.remove("activeBG");
  }

  if (document.getElementById("input" + (frame_no + 1) + "-1")) {
    document
      .getElementById("input" + (frame_no + 1) + "-1")
      .parentElement.parentElement.classList.add("activeBG");
  }

  switch (frame_no) {
    case 1:
      results[frame_no]["result"] = frame_res;
      break;
    case 2:
      if (results[frame_no - 1]["status"] == "X") {
        results[frame_no - 1]["result"] =
          parseInt(results[frame_no - 1]["result"]) + frame_res;
      } else if (results[frame_no - 1]["status"] == "/") {
        results[frame_no - 1]["result"] =
          parseInt(results[frame_no - 1]["result"]) +
          parseInt(results[frame_no]["1"]);
      }
      results[frame_no]["result"] = parseInt(
        results[frame_no - 1]["result"] + frame_res
      );
      break;
    default:
      if (results[frame_no - 1]["status"] == "X") {
        if (results[frame_no - 2]["status"] == "X") {
          results[frame_no - 2]["result"] =
            parseInt(results[frame_no - 2]["result"]) +
            parseInt(results[frame_no]["1"]);
          results[frame_no - 1]["result"] =
            parseInt(results[frame_no - 1]["result"]) +
            parseInt(results[frame_no]["1"]);
        }
        results[frame_no - 1]["result"] =
          parseInt(results[frame_no - 1]["result"]) +
          parseInt(results[frame_no]["1"]) +
          (results[frame_no]["2"] == ""
            ? parseInt(0)
            : parseInt(results[frame_no]["2"]));
      } else if (results[frame_no - 1]["status"] == "/") {
        results[frame_no - 1]["result"] =
          parseInt(results[frame_no - 1]["result"]) +
          parseInt(results[frame_no]["1"]);
      }
      results[frame_no]["result"] = parseInt(
        results[frame_no - 1]["result"] + frame_res
      );
      break;
  }
  update_frame_result();
  return;
}

function update_frame_result() {
  switch (frame_no) {
    case 1:
      document.getElementById("input" + frame_no + "-res").innerText =
        results[frame_no]["result"];
      break;
    case 2:
      document.getElementById(
        "input" + parseInt(frame_no - 1) + "-res"
      ).innerText = results[frame_no - 1]["result"];

      document.getElementById("input" + frame_no + "-res").innerText =
        results[frame_no]["result"];
      break;
    default:
      document.getElementById(
        "input" + parseInt(frame_no - 2) + "-res"
      ).innerText = results[frame_no - 2]["result"];

      document.getElementById(
        "input" + parseInt(frame_no - 1) + "-res"
      ).innerText = results[frame_no - 1]["result"];

      document.getElementById("input" + frame_no + "-res").innerText =
        results[frame_no]["result"];
      break;
  }
  document.getElementById("bowl_result").innerText =
    results[frame_no]["result"];

  let maxPossible = results[frame_no]["result"] + (10 - frame_no) * 30;

  document.getElementById("max_possible").innerText = maxPossible;
  return;
}

function end_game() {
  for (var i = 0; i < 10; i++) {
    form[`e-${i}`].disabled = true;
  }
  form["e-/"].disabled = true;
  form["e-X"].disabled = true;
}