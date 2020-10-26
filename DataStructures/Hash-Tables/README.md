# Hash Tables 

## Implementation

> keys Function

        keys(){
        const arrayKays = [];

        for(let i = 0 ; i < this.data.length ; i++ )
        {
            if(this.data[i])
            {
            arrayKays.push(this.data[i][0][0]);
            }
        }
        return arrayKays;
    }
}
