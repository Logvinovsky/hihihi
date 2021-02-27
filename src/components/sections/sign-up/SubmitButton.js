export default function SubmitButton(props) {
    return (
        <>
            <button type="submit"
                    className="button button__link sign-up__button"
                    disabled={!props.formValid}>
                {props.value}
            </button>
        </>
    )
}