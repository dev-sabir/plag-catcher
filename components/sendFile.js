import Axios from "axios";
export default async function sendFile(file1, file2) {
  console.log("HII");
  console.log(file1, file2);
  var formData = new FormData();
  formData.append("file1", file1);
  formData.append("file2", file2);
  const res = await Axios.post(
    "https://detect-plag.herokuapp.com/uploadfile",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  if (res) {
    console.log("REs ", res.data.Result);
    console.log(typeof res.data.Result);
    return res.data.Result;
  }
}
