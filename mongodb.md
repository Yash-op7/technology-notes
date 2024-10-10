- `insertOne(document);`
- `insertMany(documents[])`
- `.find(condition).sort({title:1}).count().skip(3).limit(3)`
- `findOne()`

- `.updateOne({title: 'Post 1'}, { $set: {category:'Tech'}});`

- Update Document or Insert if not Found: - 
```sh
db.posts.updateOne({ title: 'Post 6' },
{
  $set: {
    title: 'Post 6',
    body: 'Body of post.',
    category: 'News'
  }
},
{
  upsert: true
});
```
- updateMany:
db.posts.updateMany({}, {
  $inc: {
    likes: 1
  }
})


# mongoose schema,
unique: true

{ email: user.email, _id: user._id},


# jwt
```js
const jwtToken = jwt.sign(
  const user = await User.findOne({ email }).select("+password");
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
)
```

# how to handle error on frontend axios login request"
```js
 try {
        const resp = await axios.post('http://localhost:5000/products', newProduct);
        console.log('form submitted')
    } catch (err) {
        // console.log('Error submitting form', e);
        if(!err?.response) {
          setErrMsg('No server response');
        } else if(err.response?.status === 400) {
          setErrMsg('Missing fields, bad req');
        } else if(err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('login failed');
        }
        errRef.current.focus();
    }

```