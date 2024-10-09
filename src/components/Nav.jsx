import Button from "./Button";

export default function Nav() {
    return (
        <>
            <div className="p-3 mx-auto bg-slate-50 rounded-lg fixed bottom-3 w-50 bg-gray-600">
            <Button btnName={"red"} />
            <Button btnName={"blue"} />
            <Button btnName={"green"} />
            <Button btnName={"yellow"} />
            <Button btnName={"pink"} />
            <Button btnName={"lime"} />
            <Button btnName={"gold"} />
            </div>
        </>
    );
}