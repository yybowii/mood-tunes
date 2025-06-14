"use client";

import { useState } from "react";
import IntroPage from "./components/IntroPage";
import SelectPage from "./components/SelectPage";
import LoadingPage from "./components/LoadingPage";
import ResultPage from "./components/ResultPage";
import { musicList } from "./data/musicData";

export default function Home() {
  const [step, setStep] = useState("intro"); // intro, select, loading, result
  const [code, setCode] = useState("");

  const goToSelect = () => setStep("select");
  const goToLoading = () => setStep("loading");

  const goToResult = (selectedCode) => {
    setCode(selectedCode);
    setTimeout(() => setStep("result"), 2000); // 模擬 loading
  };

  const reset = () => {
    setCode("");
    setStep("intro");
  };

  return (
    <>
      {step === "intro" && <IntroPage onNext={goToSelect} />}
      {step === "select" && <SelectPage onSubmit={goToLoading} setCode={goToResult} />}
      {step === "loading" && <LoadingPage code={code} />}
      {step === "result" && <ResultPage code={code} onReset={reset} />}
    </>
  );
}
