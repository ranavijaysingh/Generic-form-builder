"use client";

import Button from "@/components/common/button";

export default function createForm() {
  const handleClick = () => {
    alert("new form");
  };

  return (
    <>
      create <Button text="New Form" onClick={handleClick} />
    </>
  );
}
