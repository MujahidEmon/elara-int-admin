import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])

    // login function with firebase
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])


    // fetching orders

    useEffect(() => {
        fetch('https://elara-international-server.onrender.com/orders')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data)
        })
    }, [])

     // remove cart products and also from local storage

//   const handleRemoveFromCart = (_id) => {
//     if (user) {
//       fetch(`https://elara-international-server.onrender.com/orders/${_id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then(() => {
//           axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
//             .then(res => setCartProducts(res.data));
//         });
//     } else {
//       deleteFromCart(_id);
//       const products = getCartProducts();
//       setCartProducts(products);
//     }
//   };

  const handleIncrease = (product) => {
    if (user) {
      fetch(`https://elara-international-server.onrender.com/cartProducts/increase/${product._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(() => {
          axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err));
        });
    } else {
      const updated = incrementFromCart(product._id); // local function to increase qty
      setCartProducts(updated);
    }
  };

  const handleDecrease = (product) => {
    if (user) {
      fetch(`https://elara-international-server.onrender.com/cartProducts/decrease/${product._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(() => {
          axios.get(`https://elara-international-server.onrender.com/cartProducts/${user.email}`)
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err));
        });
    } else {
      const updated = decrementFromCart(product._id); // local function to decrease qty or remove
      setCartProducts(updated);
    }
  };

    const AuthInfo = {
        user,
        login,
        logout,
        loading,
        orders,
        handleDecrease,
        handleIncrease,
        // handleRemoveFromCart
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;