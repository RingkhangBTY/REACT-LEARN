

function Student({stuDetails}){
    return (
        <div>
            <h2>Name: {stuDetails.stuName}</h2>
            <h2>Course: {stuDetails.course}</h2>
            <h2>Semester: {stuDetails.sem}</h2>
        </div>
    )
}

export default Student