import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/container";
const User = ({ user }) => {
  console.log(user);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card text-center">
            <div className="card-header ">
              <img
                src={user.avatar}
                alt={user.avatar}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

User.getInitialProps = async (ctx) => {
  const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJson = await response.json();
  console.log(resJson);
  return { user: resJson.data };
};

export default User;
