<template>
<v-card>
        <v-card-title>
          <span class="headline">Approve request</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12>
                        <v-text-field
                        label="User mail Address"
                        color="teal lighten-3"
                        class="search"
                        single-line
                        outline
                        type="search"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                    <section>
                    <v-flex xs12>
                      <v-avatar size="100" class="detailAvatar">
                        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12>
                      <div class="headline peopleName">Matsui Akira</div>
                    </v-flex>
                    <v-flex xs12>
                    <v-btn class="applyButton" depressed color="teal lighten-3" dark @click="">Apply</v-btn>
                    </v-flex>
                    </section>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
      </v-card>
    </template>