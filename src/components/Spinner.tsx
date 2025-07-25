import { MoonLoader } from "react-spinners";

const override = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px",
};

type SpinnerProps = {
  loading: boolean;
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <MoonLoader loading={loading} color="#a445ed" cssOverride={override} />
  );
};

export default Spinner;
