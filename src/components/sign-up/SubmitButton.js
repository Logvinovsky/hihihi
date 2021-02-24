export default function SubmitButton(props) {
    return (
        <>
            <input type="submit"
                   className="button button__link sign-up__button"
                   value={props.value}
            />
        </>
    )
}