import AWS from "aws-sdk";

const S3_BUCKET = import.meta.env.VITE_BLOG_IMAGE_NAME;
const REGION = import.meta.env.VITE_BLOG_IMAGE_REGION;

AWS.config.update({
  accessKeyId: import.meta.env.VITE_BLOG_IMAGE_ACCESS_KEY,
  secretAccessKey: import.meta.env.VITE_BLOG_IMAGE_SECRET_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageS3 = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
  );
};

export default UploadImageS3;
