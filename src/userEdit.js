import React from "react";
import { Link, useParams } from "react-router-dom";

function userEdit() {
  const params = useParams();
  return <div>Useredit-{params.editid}</div>;
}

export default userEdit;
