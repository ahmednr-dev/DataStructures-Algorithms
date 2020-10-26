
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
    set(key,value){
        let address = this._hash(key); // make new Hash Address
        if( ! this.data[address] )    // if that Address not found before 
        {
            this.data[address] =[];
        }
        this.data[address].push([key,value]);
 //       return this.data
    }
    get(key){
        const address = this._hash(key)
        const currentBucket = this.data[address]
        if(currentBucket)
        {
            for (let i = 0 ; i < currentBucket.length ;++i)
            {
                if( currentBucket[i][0] === key )
                {
                    return currentBucket[i][1]; //return value
                }
            }
        }
        return undefined;
    }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
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

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys();
