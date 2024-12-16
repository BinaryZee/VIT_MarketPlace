<script lang='ts'> 
const makeUser= async()=>{
    const res = await fetch('/',{
      method:'POST',
      headers:{
        'content-type' : 'application/json',
      }
    });
}
</script>

<div class="signin-container">
    <button on:click={makeUser} class="google-signin-btn">
      Sign in with Google
    </button>
</div>

<style>
    /* Centering container */
.signin-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f7f9fc, #eef1f6);
}

/* Google button styling */
.google-signin-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background: white;
  color: #757575;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover and focus effects */
.google-signin-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.google-signin-btn:focus {
  outline: none;
  box-shadow: 0px 0px 0px 4px rgba(66, 133, 244, 0.3);
}

/* Active state */
.google-signin-btn:active {
  transform: scale(0.98);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

</style>