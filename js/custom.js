window.onload = function () {

	$('.loading').addClass('loaded');

	var app = new Vue({
      	el: '#app'      
    });



};

	Vue.component('menu-bar', {
		  template: `<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="vertical" @select="handleSelect">
			  <el-menu-item :index="menu.index" v-for="menu in menus"><a :href="menu.link" >{{menu.name}}</a></el-menu-item>
			  
			</el-menu>`,

			 methods: {
		      handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		      }

		    },
		    data: function () {
			  return {
			    menus: [
			      { name: 'Home', link: 'index.php', index: '1'},
			      { name: 'AllUsers', link: 'users.php', index: '1.1'},
			      { name: 'taso', link: 'Paso', index: '1.2'},
			      { name: 'Laso', link: 'Paso', index: '2'},
			      { name: 'Paso', link: 'Paso', index: '2.1'},
			      { name: 'taso', link: 'Paso', index: '3'},
			      { name: 'Laso', link: 'Paso', index: '3.1'},
			      { name: 'Paso', link: 'Paso', index: '3.1.1'},
			      { name: 'taso', link: 'Paso', index: '4'}
			    ]
			  }
			}
	});

		
	Vue.component('notifications', {
		template: ` <div class="notifications">
   			
	   					<el-dropdown trigger="click">
						  <p type="primary">
						    <i class="ti-bell"></i>
						  </p>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item v-for="notification in notifications"><a :href="notification.link" >{{notification.name}}</a></el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
					</div>
   				`,
	    data: function () {
		  return {
		    notifications: [
		      { name: 'Laso', link: 'Paso'},
		      { name: 'Paso', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		      { name: 'Laso', link: 'Paso'},
		      { name: 'Paso', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		      { name: 'Laso', link: 'Paso'},
		      { name: 'Paso', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		    ]
		  }
		}
	});

	Vue.component('messages', {
		template: ` <div class="messages">
   			
	   					<el-dropdown  trigger="click">
						  <p type="primary">
						    <i class="ti-bell"></i>
						  </p>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item v-for="message in messages"><a :href="message.link" >{{message.name}}</a></el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
					</div>
   				`,
	    data: function () {
		  return {
		    messages: [
		      { name: 'MessagesMessagesMessages', link: 'Paso'},
		      { name: 'Nessages', link: 'Paso'},
		      { name: 'LAsoooo', link: 'Paso'},
		      { name: 'Laso', link: 'Paso'},
		      { name: 'Paso', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		      { name: 'Laso', link: 'Paso'},
		      { name: 'Paso', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		    ]
		  }
		}
	});

	Vue.component('user', {
		template: ` <div class="user">
	   					<el-dropdown  trigger="click">
						  <p type="primary">
						    <i class="ti-user"></i>
						  </p>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item> <div class="img-wrap"> <img v-bind:src="image" alt="" /></div></el-dropdown-item>
						    <el-dropdown-item> <a v-bind:href="link"> {{name}}</a></el-dropdown-item>
						    <el-dropdown-item> <a v-bind:href="link"> settings</a></el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
					</div>
   				`,
	    data: function () {
			return { name: 'MessagesMessagesMessages', link: 'el/paso', image: 'images/logo.png'} 
		}
	});


	Vue.component('login-form',{
		template: `<el-form ref="form" :model="form" :rules="rules" label-width="120px">
		  <el-form-item label="email" prop="email">
		    <el-input type="email" placeholder="Email" v-model="form.email"></el-input>
		  </el-form-item>
		  <el-form-item label="password" prop="password">
		    <el-input type="password" v-model="form.password" placeholder="Password">
		    </el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('form')">Login</el-button>
		    <el-checkbox v-model="form.checked">Remember Me?</el-checkbox>
		    
		  </el-form-item>
		</el-form>
		`,
		data() {
		      return {
		        form: {
		          email: '',
		          password: '', 
		          checked: false
		          
		        },
		        rules: {
		          email: [
		            { required: true, message: 'Please input email address', trigger: 'blur' },
		      		{ type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
		          ],
		          password: [
		          	{ required: true, message: 'Please input password', trigger: 'blur' },
		            { min: 6, message: 'Password should be 6 characters', trigger: 'blur' }
		          ]
		        }
		      };
		    },
		    methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {            
		        		this.$message({
				          message: 'Login Sucess',
				          type: 'success'
				        });
		          } else {
		            
				        this.$message({
				          message: 'Login Failed!',
				          type: 'error'
				        });
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      }
					    }

	});

	Vue.component('register', {
	  	 template: `<el-form ref="form" :model="form" :rules="rules" label-width="120px">
					  <el-form-item label="name" prop="name">
					    <el-input type="text" placeholder="Full Name" v-model="form.name"></el-input>
					  </el-form-item>
					  <el-form-item label="email" prop="email">
					    <el-input type="email" v-model="form.email"></el-input>
					  </el-form-item>
					  <el-form-item label="password" prop="password">
					    <el-input type="password" placeholder="Email" v-model="form.password" placeholder="Password">
					    </el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="submitForm('form')">Create</el-button>
					    <el-button @click="resetForm('form')">Reset</el-button>
					  </el-form-item>
					</el-form>`,
		 data() {
		      return {
		        form: {
		          name: '',
		          email: '',
		          password: '',
		          
		        },
		        rules: {
		          name: [
		            { required: true, message: 'Please input Name', trigger: 'blur' },
		            { min: 3, message: 'Please input Name', trigger: 'blur' },
		          ],
		          email: [
		            { required: true, message: 'Please input email address', trigger: 'blur' },
		      		{ type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
		          ],
		          password: [
		          	{ required: true, message: 'Please input password', trigger: 'blur' },
		            { min: 6, message: 'Password should be 6 characters', trigger: 'blur' }
		          ]
		        }
		      };
		    },
		    methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {            
		        		this.$message({
				          message: 'Login Sucess',
				          type: 'success'
				        });
		          } else {
		            
				        this.$message({
				          message: 'Login Failed!',
				          type: 'error'
				        });
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      }
		    }
	});

	Vue.component('event', {
	  	template: `
	  	 	<el-form ref="form" :model="form" :rules="rules" label-width="120px">
			  <el-form-item label="title" prop="title">
			    <el-input type="text" placeholder="Title" v-model="form.title"></el-input>
			  </el-form-item>
			  <el-form-item label="short-description" prop="shortdescription">
			    <el-input placeholder="Short Description" type="textarea" v-model="form.shortdescription"></el-input>
			  </el-form-item>
  	 		<div class="block">
			    <span class="demonstration">Start </span>
			    <el-date-picker
			      v-model="form.start"
			      type="datetime"
			      placeholder="Select date and time">
			    </el-date-picker>
			</div>
  	 		<div class="block">
			    <span class="demonstration">End Date </span>
			    <el-date-picker
			      v-model="form.end"
			      type="datetime"
			      placeholder="Select date and time">
			    </el-date-picker>
			</div>
			  <el-form-item label="description" prop="description">
			    <el-input placeholder="Description" type="textarea" v-model="form.description">
			    </el-input>
			  </el-form-item>
			  <imgupload></imgupload>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('form')">Create</el-button>
			    <el-button @click="resetForm('form')">Reset</el-button>
			  </el-form-item>
			</el-form>
		`,
		 data() {
	      return {
            form: {
		        start: '',
		        end: '',
	            title: '',
	            shortdescription: '',
	            description: ''
	          
	        },
	        rules: {
	          title: [
	            { required: true, message: 'Please input Title', trigger: 'blur' },
	            { min: 3, message: 'Title must be of min 3 characters', trigger: 'blur' }
	          ],
	          shortdescription: [
	            { required: true, message: 'Please input Short descriptions', trigger: 'blur' }
	          ],
	          description: [
	          	{ required: true, message: 'Please input Description', trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {            
		        		this.$message({
				          message: 'Login Sucess',
				          type: 'success'
				        });
		          } else {
		            
				        this.$message({
				          message: 'Login Failed!',
				          type: 'error'
				        });
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      }
		    }
	});

	// Vue.component('create', {
	//   	 template: `<el-form ref="form" :model="form" :rules="rules" label-width="120px">
	// 				  <el-form-item label="title" prop="title">
	// 				    <el-input type="text" placeholder="Title" v-model="form.title"></el-input>
	// 				  </el-form-item>
	// 				  <el-form-item label="short-description" prop="shortdescription">
	// 				    <el-input placeholder="Short Description" type="textarea" v-model="form.shortdescription"></el-input>
	// 				  </el-form-item>
	// 				  <el-form-item label="description" prop="description">
	// 				    <el-input placeholder="Description" type="textarea" v-model="form.description">
	// 				    </el-input>
	// 				  </el-form-item>
	// 				  <imgupload></imgupload>
	// 				  <el-form-item>
	// 				    <el-button type="primary" @click="submitForm('form')">Create</el-button>
	// 				    <el-button @click="resetForm('form')">Reset</el-button>
	// 				  </el-form-item>
	// 				</el-form>`,
	// 	 data() {
	// 	      return {
	// 	        form: {
	// 	          title: '',
	// 	          shortdescription: '',
	// 	          description: '',
		          
	// 	        },
	// 	        rules: {
	// 	          title: [
	// 	            { required: true, message: 'Please input Title', trigger: 'blur' },
	// 	            { min: 3, message: 'Title must be of min 3 characters', trigger: 'blur' }
	// 	          ],
	// 	          shortdescription: [
	// 	            { required: true, message: 'Please input Short descriptions', trigger: 'blur' }
	// 	          ],
	// 	          description: [
	// 	          	{ required: true, message: 'Please input Description', trigger: 'blur' }
	// 	          ]
	// 	        }
	// 	      };
	// 	    },
	// 	    methods: {
	// 	      submitForm(formName) {
	// 	        this.$refs[formName].validate((valid) => {
	// 	          if (valid) {            
	// 	        		this.$message({
	// 			          message: 'Saved!',
	// 			          type: 'success'
	// 			        });
	// 	          } else {
		            
	// 			        this.$message({
	// 			          message: 'Saving Failed!',
	// 			          type: 'error'
	// 			        });
	// 	            return false;
	// 	          }
	// 	        });
	// 	      },
	// 	      resetForm(formName) {
	// 	        this.$refs[formName].resetFields();
	// 	      },
	//       	  handleRemove(file, fileList) {
	// 	        console.log(file, fileList);
	// 	      },
	// 	      handlePreview(file) {
	// 	        console.log(file);
	// 	      }
	// 	    }
	// });

	// Vue.component('imgupload', {
	//   	 template: `<el-upload
	// 		  type="drag"
	// 		  :multiple="true"
	// 		  :on-preview="handlePreview"
	// 		  :on-remove="handleRemove"
	// 		  :on-success="handleSuccess"
	// 		  :on-error="handleError"
	// 		  :default-file-list="fileList"
	// 		>
	// 		  <i class="el-icon-upload"></i>
	// 		  <div class="el-dragger__text">Drop file here or <em>click to upload</em></div>
	// 		  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
	// 		</el-upload>`,
	// 	data() {
	//       return {
	//         fileList: [
	//         	// {name: '', url: ''}
	//         ]
	//       };
	//     }
	// });

	Vue.component('breadcrumb', {
	  	template: `<el-breadcrumb separator="/">
			  <el-breadcrumb-item v-for="url in urls" :to="{ path: '/url.link' }">{{url.name}}</el-breadcrumb-item>
			</el-breadcrumb>`,
		data() {
	      return {
	      	urls: [
	      		{name: 'Home', link: '/'},
	      		{name: 'Link', link: '/paso'},
	      		{name: 'Inside Link', link: 'el/paso/dass'}
	      	]
	      };
	    }
	});

	Vue.component('posts', {
	  	template: `<el-row :gutter="20">
  				<el-col :span="8" v-for="post in posts">
		  	 	 <el-card >
			      <img :src="post.image" class="image">
			      <div>
			        <span>{{post.name}}</span>
			        <div class="bottom clearfix">
			          <el-button type="text" class="button">view more</el-button>
			        </div>
			      </div>
		    </el-card></el-col></el-row>
	  	 `,
		data() {
	      return {
	      	posts: [
	      		{name: 'Home', link: '/', image: 'images/logo.png'},
	      		{name: 'some', link: '/sadasd', image: 'images/logo.png'},
	      		{name: 'Tome', link: '/sadasd', image: 'images/logo.png'},
	      		{name: 'Gome', link: '/sadasd', image: 'images/logo.png'},
	      	]
	      };
	    }
	});

	Vue.component('allusers', {
	  	template: `
	  	 	<el-table
		      :data="users"
		      style="width: 100%">
		      <el-table-column
		        prop="date"
		        label="Date"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="Name"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="usertype"
		        label="User Type">
		      </el-table-column>
		      <el-table-column
			      fixed="right"
			      label="Operations"
			      width="120">
			      <template scope="scope">
			        <el-button @click="handleClick" prop="link" type="text" size="small"><a :href=link>Detail</a></el-button>
			        <el-button type="text" size="small">Edit</el-button>
			      </template>
			    </el-table-column>
		    </el-table>
	  	`,

		data() {
	        return {
	          users: [{
	            name: 'Tom',
	            usertype: 'student',
	            date: '2016-05-03',
	            link: 'lorem'
	          }, {
	            date: '2016-05-02',
	            name: 'Tom',
	            usertype: 'student',
	            link: 'lorem'
	          }, {
	            date: '2016-05-04',
	            name: 'Tom',
	            usertype: 'student',
	            link: 'lorem'
	          }, {
	            date: '2016-05-01',
	            name: 'Tom',
	            usertype: 'student',
	            link: 'lorem'
	          }]
	        }
	    },
	    methods: {

	    	handleClick() {
		        if (this.active++ > 2) this.active = 0;
		    }

	    }
	});
