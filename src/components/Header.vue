<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="https://www.pikpng.com/pngl/m/447-4478135_play-multiple-choice-questions-icon-clipart.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        <!-- text in here -->
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Library</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="http://example.com"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Createquiz">Create Quiz</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
          <form class="form-inline my-2 my-md-0">
            <input class="form-control" type="text" placeholder="Search" />
          </form>
          <li class="nav-item avatar dropdown">
            <a
              class="nav-link dropdown-toggle waves-effect waves-light"
              id="navbarDropdownMenuLink-5"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              ><img
                src="https://www.vhv.rs/dpng/d/408-4087421_person-svg-circle-icon-picture-charing-cross-tube.png"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
            /></a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-purple"
              aria-labelledby="navbarDropdownMenuLink-5"
            >
              <router-link
                tag="a"
                class="dropdown-item waves-effect waves-light"
                to="/login"
                >Login</router-link
              >
              <a class="dropdown-item waves-effect waves-light" href="#"
                >Another action</a
              >
              <a class="dropdown-item waves-effect waves-light" href="#"
                >Something else here</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script></script>

<style></style>
