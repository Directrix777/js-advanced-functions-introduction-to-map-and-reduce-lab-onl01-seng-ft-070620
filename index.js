// Your code here
function mapToNegativize(array)
{
    let newArray = []
    for(let num of array)
    {
        newArray.push(num * -1)
    }
    return newArray
}

function mapToNoChange(array)
{
    let newArray = []
    for(let num of array)
    {
        newArray.push(num)
    }
    return newArray
}

function mapToDouble(array)
{
    let newArray = []
    for(let num of array)
    {
        newArray.push(num * 2)
    }
    return newArray
}

function mapToSquare(array)
{
    let newArray = []
    for(let num of array)
    {
        newArray.push(num * num)
    }
    return newArray
}

function reduceToTotal(array, starting = 0)
{
    let total = starting
    for(let num of array)
    {
        total += num
    }
    return total
}

function reduceToAllTrue(array)
{
    for(let thing of array)
    {
        if(!thing)
        return false
    }
    return true
}

function reduceToAnyTrue(array)
{
    for(let thing of array)
    {
        if(!!thing)
        return true
    }
    return false
}