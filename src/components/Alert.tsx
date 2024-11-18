interface AlertProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "succes"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClose: () => void;
}

const Alert = ({ children, color = "primary", onClose }: AlertProps) => {
  return (
    <div className={"alert alert-" + color + " alert-dismissible"}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
