"use client";

import { useEffect } from "react";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import { useRouter } from 'next/navigation'


export default function Home() {
  const [anonAadhaar] = useAnonAadhaar();
  
  const router = useRouter()

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    if(anonAadhaar.status === "logged-in"){
      router.push('/')
      
    }
  }, [anonAadhaar]);

  return (
    <>
      <div>
        <LogInWithAnonAadhaar nullifierSeed={1234} />
        <p>{anonAadhaar?.status}</p>
      </div>
      <div>
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            {/* <AnonAadhaarProof code={JSON.stringify(anonAadhaar.anonAadhaarProof, null, 2)} /> */}
          </>
        )}
      </div>
    </>
  );
}
