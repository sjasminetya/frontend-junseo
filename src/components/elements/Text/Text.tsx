import React from "react";
import styles from "./styles.module.css";

type Target = {
  target: {
    name: string | undefined,
    value: string | number | undefined
  }
}

type Props = {
  append?: React.ReactNode,
  appendClassName?: string,
  errorResponse?: string,
  id?: string,
  inputClassName?: string,
  isDisabled?: boolean,
  label?: string,
  name?: string,
  onBlur?: () => void,
  onChange?: ((target: Target) => void) | any,
  outerClassName?: string,
  placeHolder?: string,
  type?: string,
  value?: number | string | any,
  isRequired?: boolean,
  prefix?: "rupiah" | "percent" | "day" | string | any,
}

export default function Text(props: Props) {
  const { value, type, placeHolder, name, outerClassName, inputClassName, errorResponse, label, isDisabled, onBlur, isRequired } = props;
  const id = props.id ? props.id : "inputText";
  let pattern: any = "";

  if (type === "email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  } else if (type === "tel") {
    pattern = "[0-9]*";
  }

  const onChange = (e: any) => {
    const changeRupiah = e.target.value !== "" ? (e.target.value).replace(/,|\D/g, "") : "";
    const target: Target = {
      target: {
        name: name,
        value: props.prefix === "rupiah" ? changeRupiah : e.target.value,
      },
    };

    if (type === "tel") {
      if (e.target.validity.valid) {
        props.onChange(target);
      }
    } else {
      props.onChange(target);
    }
  };

  const renderPrefix = () => {
    if (props.prefix === "rupiah") {
      return "Rp";
    } else if (props.prefix === "percent") {
      return "%";
    } else if (props.prefix === "day") {
      return "Days";
    } else {
      return "";
    }
  };

  return (
    <div className={[styles.input, outerClassName].join(" ")}>
      {label && <label className={styles.label}>{label} {isRequired && <span className="text-red-500">*</span>}</label>}
      <div className="relative">
        <div className={`absolute inset-y-0 left-0 ${props.prefix === "rupiah" ? "pl-4" : "pl-14"} flex items-center text-gray-400 pointer-events-none`}>
          {renderPrefix()}
        </div>
        {
          type === "textarea" ? (
            <textarea
              className={[styles.formControl, inputClassName, "pl-4"].join(" ")}
              cols={30}
              disabled={isDisabled}
              id={id}
              name={name}
              onChange={onChange}
              placeholder={placeHolder}
              rows={5}
              value={value}
            />
          ) : (
            <input
              className={[styles.formControl, inputClassName, props.prefix === "rupiah" ? "pl-10" : "pl-4"].join(" ")}
              disabled={isDisabled}
              id={id}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              pattern={pattern}
              placeholder={placeHolder}
              type={type}
              value={value}
            />
          )
        }
        <div className={["absolute top-0 right-0 z-50", styles.append, props.appendClassName].join(" ")}>
          {props.append}
        </div>
      </div>
      {
        errorResponse && (
          <span className={styles.errorHelper}>{errorResponse}</span>
        )
      }
    </div>
  );
}

Text.defaultProps = {
  errorResponse: "",
  inputClassName: "",
  label: "",
  name: "",
  outerClassName: "",
  placeHolder: "",
  type: "text",
};
