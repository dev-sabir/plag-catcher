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
  //console.log(typeof res.data.Result);
  //console.log(res.data.Result);
  //  console.log("Hello");
  //return res.data.Result;

  if (typeof res.data.Result === typeof 1) {
    console.log("REs ", res.data.Result * 100);
    console.log(typeof res.data.Result);
    return res.data.Result;
  }
}
