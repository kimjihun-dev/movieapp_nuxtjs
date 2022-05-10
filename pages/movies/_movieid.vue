<template>
  <Loading v-if="$fetchState.pending" />
  <section v-else class="container single-movie">
    <NuxtLink class="button" :to="{ name: 'index' }">Back</NuxtLink>
    <div class="movie-info">
      <div class="movie-img">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt=""
        />
      </div>
      <div class="movie-content">
        <h1>제목 : {{ movie.title }}</h1>
        <p class="movie-fact tagline">
          <span>태그라인:</span>"{{ movie.tagline }}"
        </p>
        <p class="movie-fact">
          <span>개봉일:</span>
          {{
            new Date(movie.release_date).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
        <p class="movie-fact">
          <span>상영시간 : </span> {{ movie.runtime }} 분
        </p>
        <p class="movie-fact">
          <span>수익(달러):</span>
          {{
            movie.revenue.toLocaleString("en-us", {
              style: "currency",
              currency: "USD",
            })
          }}
        </p>
        <p class="movie-fact"><span>줄거리 : </span> {{ movie.overview }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "single-movie",
  head() {
    return {
      title: this.movie.title,
    };
  },
  data() {
    return {
      movie: "",
    };
  },
  async fetch() {
    await this.getSingleMovie();
  },

  fetchDelay: 1000,

  methods: {
    async getSingleMovie() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=7c36122d553d34675e5093cd8f94049d&language=ko-KR&page=1`
      );
      const result = await data;
      this.movie = result.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 32px;
    color: #fff;

    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }

    .movie-img {
      img {
        max-height: 500px;
        width: 100%;

        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }
    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }
      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;

        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }
      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>
