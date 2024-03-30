import dynamic from "next/dynamic";
// import Test from "./test";

const Connect = dynamic(() => import("./test"), { ssr: false });
const TestComponent = () => {
    return <Connect />;
};

export default TestComponent;