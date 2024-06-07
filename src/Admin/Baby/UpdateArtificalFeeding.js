import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateArtificalFeeding() {
const [artifical, setArtificals] = useState({
title: "",
description: "",
err: "",
loading: false,
reload: false,
success: null,
});
const [message, setMessage] = useState("");
const navigate = useNavigate();
const { id } = useParams();

const handleSubmit = async (e) => {
e.preventDefault();
setArtificals({ ...artifical, loading: true });

const formData = new FormData();
if (artifical.title !== "") formData.append("title", artifical.title);
if (artifical.description !== "") formData.append("description", artifical.description);

try {
const response = await axios.post(
`https://gradhub.hwnix.com/api/update_DESC/${id}`,
formData,
{
headers: {
  "Content-Type": "multipart/form-data",
},
}
);
setMessage(response.data.Result);
navigate("/ArtificalFeeding");
} catch (error) {
setMessage("There is something wrong");
}
};

useEffect(() => {
axios
.get("https://gradhub.hwnix.com/api/get_Byid/en/" + id)
.then((resp) => {
setArtificals({
...artifical,
title: resp.data.title,
description: resp.data.description,
});
})
.catch((err) => {
setArtificals({
...artifical,
loading: false,
success: null,
err: "Something went wrong, please try again later !",
});
});
}, [artifical.reload]);

return (
<div className='body-uCH'>
<div className='container-u-CH'>
<form onSubmit={handleSubmit}>
<div className='row-CH'>
  <div className='clo-25-CH'>
    <label htmlFor="title" className='label-u-CH'>Title:</label>
  </div>
  <div>
    <input
      type="text"
      id="title"
      value={artifical.title}
      onChange={(e) => setArtificals({ ...artifical, title: e.target.value })}
    />
  </div>
</div>

<div className='row-CH'>
  <div className='clo-25-CH'>
    <label htmlFor="description" className='label-u-CH'>Description:</label>
  </div>
  <div>
    <textarea
      id="description-u-CH"
      value={artifical.description}
      onChange={(e) => setArtificals({ ...artifical, description: e.target.value })}
    />
  </div>
</div>


<div className="row-CH">
  <button type="submit" className='b-u-CH'>Submit</button>
</div>
</form>
{message && <p>{message}</p>}
</div>
</div>
);
}

export default UpdateArtificalFeeding;