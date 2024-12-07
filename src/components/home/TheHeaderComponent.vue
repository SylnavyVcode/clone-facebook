<template>
  <div v-show="showMenu" class="lg:hidden" id="toogle_btn_close">
    <div class="w-64 z-40 pl-16 font-black relative text-end">
      <span
        class="pointer border-2 bg-black border-black text-white px-2"
        @click="toogleMenu"
        >X</span
      >
    </div>
    <Sidebar :TEXT="TEXT"></Sidebar>
  </div>
  <div>
    <header
      class="absolute w-full grid gap-2 grid-cols-2 pt-2 border-b-2 border-[#CFD8E3] bg-[#EFEFEF]"
    >
      <!--Hamburger -s-->
      <div class="flex">
        <div
          id="BtnBurger"
          class="w-10 ml-2 mt-2 lg:hidden"
          @click="toogleMenu"
        >
          <div
            class="space-y-1 border-2 p-2 rounded-md cursor-pointer group transition hover:bg-gray-600"
          >
            <span
              class="block w-6 h-0.5 bg-gray-800 transition group-hover:bg-white"
            ></span>
            <span
              class="block w-6 h-0.5 bg-gray-800 transition group-hover:bg-white"
            ></span>
            <span
              class="block w-4 h-0.5 bg-gray-800 transition group-hover:bg-white"
            ></span>
          </div>
        </div>
        <!-- s: Header Title-->
        <h2 class="flex text-2xl font-semibold pl-6 pt-2">
          {{ entreprise.libelle }}
        </h2>
        <!-- e: Header Title-->
      </div>
      <!--Hamburger -e-->
      <div
        class="flex w-full items-center justify-end bg-info dark:bg-primary mb-4"
      >
        <!--s: Header right menu -->
        <ul class="flex items-center">
          <!-- ========== Start Nofication  ========== -->
          <!-- <li @mouseover="ShowNotification()" @mouseleave="hideNotification()">
            <button id="btn-notification">
              <img
                src="../../assets//images/home/ico/notif.svg"
                alt="notification icon"
                class="h-[35px] w-[35px] inline-block mr-2"
              />
            </button>

            <div
              id="btn-navProfileDropdown__content"
              class="z-10 m-6 flex h-[282px] bg-white absolute right-[1%] top-[75%] mt-1 rounded-md overflow-hidden shadow-[6px_4px_16px_rgba(0,0,0,0.25)]"
              :class="[activeNotif === true ? 'visible' : 'hidden']"
            >
              <div class="flex w-[288px] items-center">
                <div data-content="1" class="justify-center text-center w-full">
                  <ul role="list" class="p-1 divide-y divide-slate-200">
                    

                    <li class="hover:bg-slate-100">
                      <div>
                        <a
                          href="#"
                          class="text-sm font-medium text-slate-900 hover:text-blue-900"
                          >...</a
                        >
                        <p class="text-sm text-slate-500 truncate">
                          ...
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li> -->
          <!-- ========== End Nofication  ========== -->

          <!-- ========== Start profil view ========== -->
          <li
            @mouseover="ShowProfil()"
            @mouseleave="hideProfile()"
            class="flex border-2 rounded-2xl px-2 py-1 ml-4"
            id="profilBock"
          >
            <button id="btn-navProfileDropdown flex-1" type="button">
              <img
                id="filledProfile"
                v-if="imgProfil.length > 0"
                :src="config.base_url + '/images/' + imgProfil"
                alt="profile-picture"
                class="rounded-full h-[35px] w-[35px] inline-block mr-3 aspect-square"
              />
              <img
                id="emptyProfile"
                v-else
                class="rounded-full h-[35px] w-[35px] inline-block mr-3"
                src="../../assets/images/home/photo_profil.jpg"
                alt="profile-picture"
              />
              <span
                class="mr-3 font-semibold text-xs hidden sm:inline-flex"
                id="emailUser"
              >
                {{ truncateString(dataAccount.fullname, 20) }}
              </span>
              <svg
                class="h-4 w-4 text-black inline-flex rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <!-- s: Profile Menu Open -->
            <div
              id="btn-navProfileDropdown__content"
              class="z-30 flex h-[340px] bg-white absolute right-2 sm:right-0 top-[70%] rounded-md overflow-hidden shadow-[6px_4px_16px_rgba(0,0,0,0.25)]"
              :class="[activeProfil === true ? 'visible' : 'hidden']"
            >
              <div
                class="flex w-[50%] sm:w-[268px] items-center overflow-y-scroll"
              >
                <div
                  data-content="1"
                  class="justify-center text-center w-full"
                  :class="[
                    activeProfilLink == 'profile' ? 'visible' : 'hidden',
                  ]"
                >
                  <div>
                    <img
                      id="full_filled_profile_pic"
                      v-if="imgProfil.length > 0"
                      class="m-auto rounded-full h-[145px] w-[145px] inline-block aspect-square"
                      :src="config.base_url + '/images/' + imgProfil"
                      alt="profile-picture"
                    />

                    <img
                      v-else
                      id="full_empty_profile_pic"
                      class="m-auto h-[145px] w-[145px]"
                      src="../../assets/images/home/photo_profil.jpg"
                      alt="profile-picture"
                    />
                    <p
                      aria-label="profile name"
                      class="break-words text-xs"
                      id="fullname_label"
                      :title="dataAccount.fullname"
                    >
                      {{ truncateString(dataAccount.fullname,  25) }}

                    </p>

                    <p
                      aria-label="profile name"
                      id="matricule_label"
                      class="break-words p-2 lg:px-5 text-xs"
                    >
                      <span v-if="text.header">{{
                        text.header.matricule
                      }}</span>
                      : {{ truncateString(dataAccount.matricule, 35) }}
                    </p>
                  </div>
                  <hr class="mt-5 mx-20" />
                  <div ref="profil" class="grid justify-center mt-2">
                    <button
                      @click="logout()"
                      id="btn_logout_Profile"
                      class="mt-2 px-2 border-2 border-black rounded-md block w-[171px] h-[40px] text-xs text-center text-black hover:bg-black hover:text-white"
                    >
                      <span v-if="text.header">{{ text.header.logout }}</span>
                    </button>
                    <!-- <button
                      @click="checkMethods"
                      id="btn-deleteProfile"
                      class="mt-1 px-2 border-2 border-black rounded-md block w-[171px] h-[40px] text-xs text-center"
                    >
                      Delete
                    </button> -->
                  </div>
                </div>
                <div
                  data-content="2"
                  class="text-center h-56 w-full px-2"
                  :class="[
                    activeProfilLink === 'entreprise' ? 'visible' : 'hidden',
                    dataEntreprise.length > 1 ? 'grid-cols-2' : 'grid-cols-1',
                  ]"
                >
                  <div
                    v-for="(entreprisedata, id) in dataEntreprise"
                    :key="id"
                    class=""
                    :id="'enterprise' + id"
                  >
                    <div class="my-2 mx-auto flex w-full pl-1 py-1"
                    :class="[
                      entreprise.libelle == entreprisedata.libelle ? 'bg-btn-blue-hover text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl':''
                    ]">
                      <figure class="m-0 overflow-hidden w-8 h-8">
                      <img
                        v-if="entreprisedata.path_profile == ''"
                        :id="'img_entreprise_empty_' + id"
                        class="rounded-full inline-block aspect-square border-4 border-black"
                        src="../../assets/images/entreprise_002.png"
                        alt="entreprise-icon"
                        width="30"
                        height="30"
                      />
                      <img
                        v-else
                        :id="'img_entreprise_filled_' + id"
                        class="rounded-full inline-block aspect-square"
                        :src="entreprisedata.path_profile"
                        alt="entreprise-icon"
                        width="30"
                        height="30"
                      />
                    </figure>
                      <div
                        :id="'entreprise_libelle_' + id"
                        class="flex ml-4 justify-self-start items-center font-semibold mb-1"
                      >
                        {{ entreprisedata.libelle }}
                      </div>
                    </div>
                  </div>
                  <!-- <hr class="mt-5 mx-20" /> -->
                </div>
                <div
                  data-content="3"
                  class="justify-center text-center w-full"
                  :class="[
                    activeProfilLink === 'general' ? 'visible' : 'hidden',
                  ]"
                >
                  <div>
                    <img
                      class="m-auto h-[110px] w-[185px] inline-block"
                      src="../../assets/images/home/paramatre_logo.png"
                      alt="profile-picture"
                    />
                  </div>
                  <hr class="mt-5 mx-20" />
                  <div class="grid justify-center mt-2">
                    <!-- <button
                      @click="goTo('parameter', 'parameter')"
                      id="btn-setting"
                      class="mt-1 px-2 border-2 border-black rounded-md block w-[171px] h-[40px] text-xs text-center bg-black text-white"
                    >
                      Settings
                    </button> -->
                    <button
                      @click="logout()"
                      id="btn-logout"
                      class="mt-1 px-2 border-2 border-black rounded-md block w-[171px] h-[40px] text-xs text-center hover:bg-black hover:text-white"
                    >
                      <span v-if="text.header">{{ text.header.logout }}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="w-[50%] sm:w-[226px] border-l-1 shadow-[0_0_4px_rgba(0,0,0,0.25)]"
              >
                <ul>
                  <li>
                    <a
                      @click="navigateProfil('profile')"
                      class="px-6 py-2 w-full block cursor-pointer hover:bg-black hover:text-white"
                      :class="[
                        activeProfilLink === 'profile'
                          ? 'bg-black text-white'
                          : 'text-black',
                      ]"
                      id="btn-profile"
                      data-id="1"
                    >
                      <span v-if="text.header">{{ text.header.profil }}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      @click="navigateProfil('entreprise')"
                      class="px-6 py-2 w-full block cursor-pointer hover:bg-black hover:text-white text-black"
                      :class="[
                        activeProfilLink === 'entreprise'
                          ? 'bg-black text-white hover:bg-btn-blue-hover'
                          : 'text-black',
                      ]"
                      id="btn-entreprise"
                      data-id="2"
                    >
                      <span v-if="text.header">{{
                        text.header.enterprise
                      }}</span>
                    </a>
                  </li>
                  <!-- <li>
                    <a
                      @click="navigateProfil('general')"
                      class="px-6 py-2 w-full block cursor-pointer hover:bg-black hover:text-white text-black"
                      :class="[
                        activeProfilLink === 'general'
                          ? 'bg-black text-white'
                          : 'text-black',
                      ]"
                      id="btn-general"
                      data-id="3"
                      ><span v-if="text.header">{{
                        text.header.general
                      }}</span></a
                    >
                  </li> -->
                </ul>
              </div>
            </div>
            <!-- e: Profile Menu Open-->
          </li>
          <!-- ========== End profil view ========== -->
        </ul>
        <!--e: Header right menu -->
      </div>
    </header>
  </div>

 
    <LogoutModal v-if="showLogout" @closeDel="showLogout = false"></LogoutModal>
  
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { config } from "../../services/config/config";

// import { googleLogout } from "vue3-google-login";

import { Authentification } from "../../services/auth/auth";

import { Profile } from "../../services/profile/Profile";

import { Entreprise } from "../../services/entreprise";

import Sidebar from "../home/TheSidebarComponent.vue";
// import { Translator } from "../../services/lib/translator";
import LogoutModal from "./LogoutModal.vue";
import { cryptoDecrypt, cryptoEncrypt } from "../../services/lib/util";

// import {config} from "../../services/config/config.ts"
export default defineComponent({
  name: "personnelHeader",
  components: { Sidebar, LogoutModal },
  props: {
    TEXT: {
      type: Object,
    },
  },
  data() {
    return {
      activeProfil: false,
      activeNotif: false,
      activeProfilLink: "profile",
      activeLink: "",
      token: localStorage.getItem("token"),
      authProfil: new Authentification(),
      dataEntreprise: [] as any[],
      dataAccount: {} as any,
      imgProfil: "" as string,
      config: config,
      entreprise: {
        libelle: "",
      } as any,
      showMenu: false,
      text: "" as any,
      showLogout: false,
    };
  },
  watch: {
    imgProfil(newImg, oldImg) {
      if (newImg != oldImg) {
        this.getImgProfil();
        this.imgProfil = newImg;
      } else {
        this.getImgProfil();
        this.imgProfil = oldImg;
      }
    },
  },

  methods: {
    toogleMenu() {
      this.showMenu = !this.showMenu;
    },

    async getDatasEntrepise() {
      const response_get_entreprise: any = await Entreprise.getEntreprise(
        this.token,
        this.$route.params.country.toString(),
        this.$route.params.entreprise.toString()
      );

      if (response_get_entreprise) {
        this.entreprise = response_get_entreprise.entreprise[0];
      }
    },
    //navigator
    goTo(page: string, module: string) {
      // this.$emit("sendInfos")
      this.$router.push({
        name: page,
        // params: this.routeParams
      });
      this.activeLink = module;
    },
    // Get Info of the profil and entreprises
    async getInfoAccount() {
      const infoAccount = await this.getUserDatas();
      // console.log("header ::::::", infoAccount);

      this.dataEntreprise = infoAccount.account.entreprise;
      this.dataAccount = infoAccount.account;
      const hashedId = cryptoEncrypt(this.dataAccount.personnel_id);
      this.$cookies.set("__local_U", hashedId);

      console.log(
        "decrypt",
        cryptoDecrypt(hashedId),
        this.$cookies.get("__local_U")
      );

      for (let index = 0; index < this.dataEntreprise.length; index++) {
        const myEntreprise: any = this.dataEntreprise[index];

        const response_get_logo = await Profile.getProfileBrand(
          this.token!,
          myEntreprise._id
        );

        if (response_get_logo.profil.path) {
          myEntreprise.path_profile = `${config.base_url}/images/${response_get_logo.profil.path}`;
        } else {
          myEntreprise.path_profile = "";
        }
      }
      /*         let first = this.dataEntreprise[0]
        this.dataEntreprise = []
        this.dataEntreprise.push(first) */
      // console.log("test entreprise test::::", this.dataEntreprise);

      // return infoAccount
    },
    async getUserDatas() {
      const resp = await Authentification.getUserDatas(`${this.token}`);

      return resp;
    },
    //Logout function
    logout() {
      this.showLogout = true;
      // this.$cookies.remove("_rememberMe");
      // this.$cookies.remove("__email");
      // this.$cookies.remove("__secure_line");
      // localStorage.removeItem("token");
      // googleLogout();
      // this.$router.push("/");
    },
    checkMethods() {
      // const value = this.$refs.profil;
    },
    gotoEntreprise() {
      this.$router.replace("/create-entrepise");
    },
    // Affiche le contenu du profil
    ShowProfil() {
      this.activeProfil = true;
    },
    // ferme le contenu d profil
    hideProfile() {
      this.activeProfil = false;
    },
    // Affiche le contenu des notifications
    ShowNotification() {
      this.activeNotif = true;
    },
    // Affiche le contenu des notifications
    hideNotification() {
      this.activeNotif = false;
    },
    navigateProfil(title: string) {
      this.activeProfilLink = title;
    },
    async getImgProfil() {
      const response: any = await Profile.getProfile(`${this.token}`);
      // console.log":::::::", response);

      if (response.code == 200) {
        this.imgProfil = response.profil.path;
      } else {
        this.imgProfil = "";
      }
    },

    // async deleteProfilePic() {
    //   try {
    //     // console.log"je go del");
    //     const resp = await Profile.delProfilePic({ token: this.token })
    //     if (resp) {
    //       this.getDatas()
    //     } else {
    //       // console.log"pas de rep");
    //     }
    //   } catch (error) {
    //     // console.log"Oups !!! ", error);
    //   }
    // },

    truncateString(string: string, maxLength: number) {

if (string) {
  if (string.length > maxLength) {
    return string.substring(0, maxLength) + '...';
  }
  return string;
}
},
  },
  async mounted() {
    this.text = this.TEXT;
    await this.getInfoAccount();

    await this.getDatasEntrepise(); 

    await this.getImgProfil();
    // console.log("this.data entre prise :::::::!:", this.dataEntreprise);

    // console.log("this entreprise:::::::", this.dataEntreprise);
  },
});
</script>
